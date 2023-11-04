const handleRenderState = (
  called: boolean,
  loading: boolean,
  data: unknown,
  canEmpty = false,
) => {
  if (loading) {
    return 'loading'
  }

  if (called && data && canEmpty) {
    return 'empty'
  }

  if (called && data === undefined) {
    return 'error'
  }

  if (called && data) {
    return 'view'
  }

  return 'loading'
}

export default handleRenderState
