const handleDebounce = <T>(func: (args: T) => void, delay = 700) => {
  let timer: ReturnType<typeof setTimeout>

  return (args: T) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      func(args)
    }, delay)
  }
}

export default handleDebounce
