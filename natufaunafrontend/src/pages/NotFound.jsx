const NotFound = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-5 min-h-[400px]">
      <h1 className="text-xl md:text-3xl font-medium">404</h1>
      <span className="w-[4px] h-11 block bg-green-700/60 rounded-full"></span>
      <h1 className="text-xl md:text-3xl font-medium">Not Found.</h1>
    </div>
  )
}

export default NotFound