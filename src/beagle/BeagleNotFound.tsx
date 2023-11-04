import { MoveLeftIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Image from './../assets/404.svg'
const BeagleNotFound = () => {
    const navigate = useNavigate()

    return (
        <section className="flex bg-white absolute bottom-0 right-0 h-screen left-0 top-0">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-sm font-medium text-blue-500">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-zinc-950  md:text-3xl">Página não encontrada</h1>
                    <p className="mt-4 text-zinc-500 ">Desculpe, a página que você está procurando não existe</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <button onClick={() => navigate(-1)} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-zinc-950 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto">
                            <MoveLeftIcon size={16} />
                            <span>Voltar</span>
                        </button>
                        <button onClick={() => navigate('/')} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600">
                            Início
                        </button>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src={Image} alt="Erro 404" />
                </div>
            </div>
        </section>
    )
}


export default BeagleNotFound