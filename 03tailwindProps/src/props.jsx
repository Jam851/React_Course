function propExample({userName = "Me"} = props) {
    return (
       <>
       <h1 className='bg-amber-400 text-black p-4'>{userName}</h1>
       </>
    )
}

export default propExample;