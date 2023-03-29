import { IconDots } from '@tabler/icons-react'
import { FC } from 'react'

interface Props {}

const Loader: FC<Props> = () => {
  return (
    <>
      <div className="flex flex-col flex-start">
        <div className="flex items-center bg-neutral-200 text-neutral-900 rounded-2x1 px-4 py-2 w-fit">
          <IconDots className="animate-pulse" />
        </div>
      </div>
    </>
  )
}

export default Loader
