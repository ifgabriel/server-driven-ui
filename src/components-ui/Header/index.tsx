import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFetchHeader } from '../../services'
import { handleDebounce } from '../../utils'

const Header = () => {
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()
  const { data } = useFetchHeader()

  const handleSearchParams = (param: string, value: string) => {
    searchParams.set(param, value)

    navigate({ pathname: '/', search: searchParams.toString() })
  }

  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 py-3 flex gap-8 items-center justify-between flex-col md:flex-row">
        <div className="flex gap-3 flex-col sm:flex-row w-full">
          <div />
          <nav className="flex gap-4 justify-center">
            <ul className="flex items-center justify-center font-semibold gap-3">
              {data?.genders?.map((gender) => (
                <li key={gender.slug} className="sm:relative group px-3 py-2">
                  <span
                    className="text-zinc-950 cursor-pointer"
                    onClick={() => handleSearchParams('gender', gender.name)}
                  >
                    {gender.name}
                  </span>
                  <div className="absolute top-5 left-10 right-10 sm:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 sm:min-w-[360px] transform">
                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div className="relative z-10">
                        <div className="grid grid-cols-2 gap-9">
                          {gender.categories?.map((category) => (
                            <div key={category.name}>
                              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                {category.name}
                              </p>
                              <ul className="mt-3 text-[15px]">
                                {category.subCategories?.map((subCategory) => (
                                  <li
                                    key={subCategory.slug}
                                    onClick={() => {
                                      handleSearchParams('gender', gender.name)
                                      handleSearchParams(
                                        'subCategory',
                                        subCategory.name,
                                      )
                                    }}
                                    className="block p-2 -mx-2 rounded-lg text-gray-800 font-semibold hover:bg-slate-100/70 cursor-pointer"
                                  >
                                    {subCategory.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <input
          type="text"
          defaultValue={searchParams.get('name') ?? ''}
          className="w-full md:w-auto lg:min-w-[500px] px-4 py-2 text-zinc-800 bg-slate-100/70 border border-zinc-100 rounded"
          placeholder="Procure"
          onChange={handleDebounce((event) => {
            if (event.target.value.trim()) {
              handleSearchParams('name', event.target.value)
            }
          })}
        />
      </div>
    </header>
  )
}

export default Header
