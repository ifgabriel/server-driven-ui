import { XIcon } from 'lucide-react'
import { useCallback } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const Breadcrumb = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const getAllSearchParams = useCallback(() => {
    const params = []

    for (const [param, value] of searchParams.entries()) {
      if (value) {
        params.push({ name: param, value })
      }
    }

    return params.reverse()
  }, [searchParams])

  return getAllSearchParams().length ? (
    <ul className="container mx-auto flex items-center py-4 overflow-x-auto whitespace-nowrap">
      <Link
        to={{
          pathname: location.pathname,
          search: '',
        }}
        className="bg-white rounded flex gap-4 items-center justify-center px-4 py-1 hover:bg-slate-100/70 text-zinc-800 mr-5 h-[32px] box-border"
      >
        <XIcon size={14} />
      </Link>
      {getAllSearchParams().map((param, index) => (
        <li key={index} className="flex items-center text-gray-600">
          {index > 0 && <span className="mx-5 text-gray-400">/</span>}
          <Link
            to={{
              pathname: location.pathname,
              search: `?${param.name}=${param.value}`,
            }}
            className="bg-white rounded flex gap-4 items-center justify-center px-4 py-1 hover:bg-slate-100/70 text-zinc-900 h-[32px]"
          >
            {param.value}
          </Link>
        </li>
      ))}
    </ul>
  ) : null
}

export default Breadcrumb
