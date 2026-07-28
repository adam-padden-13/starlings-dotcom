interface PhotoCreditProps {
  name: string
}

const PhotoCredit = ({ name }: PhotoCreditProps) => {
  return (
    <span className="absolute right-1 bottom-1 rounded-sm bg-black px-1 text-[8px] text-gray-300">
      © {name}
    </span>
  )
}

export default PhotoCredit
