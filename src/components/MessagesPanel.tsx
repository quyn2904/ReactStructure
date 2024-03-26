// components
import DrawerBase from 'ui/DrawerBase'
import FilterItem from 'ui/FilterItem'
import MessageItem from './MessageItem'

// hooks
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

// constants
import { AnchorType } from '@constants/enums'
import { MESSAGE_OPTIONS } from '@constants/option'

// utils
import dayjs from 'dayjs'

// data placeholder
import messages, { MessageType } from '@db/messages'

interface MessagesPanelProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
}

const step = 6

const MessagesPanel = ({ open, onOpen, onClose }: MessagesPanelProps) => {
  const [headerRef, { height: headerHeight }] = useMeasure()
  const [footerRef, { height: footerHeight }] = useMeasure()
  const [filter, setFilter] = useState<string>('all')
  const [displayed, setDisplayed] = useState<number>(step)

  const latestMessages = messages.filter((message) => dayjs(message.createdAt).isAfter(dayjs().subtract(1, 'day')))
  const archivedMessages = messages.filter((message) => message.archived)

  useEffect(() => {
    setFilter('all')
    setDisplayed(step)
  }, [open])

  const handleLoadMore = () => {
    setDisplayed(displayed + step)
  }

  const getQty = (category: string) => {
    if (category === 'all') return messages.length
    if (category === 'latest') return latestMessages.length
    if (category === 'archived') return archivedMessages.length
  }

  const filteredData = () => {
    if (filter === 'all') return messages
    if (filter === 'latest') return latestMessages
    if (filter === 'archived') return archivedMessages
  }

  const sortedData = () => {
    const data = filteredData()
    return data ? data.sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt))) : []
  }

  return (
    <DrawerBase open={open} onOpen={onOpen} onClose={onClose} anchor={AnchorType.RIGHT}>
      <div className='py-8 px-[30px] pb-4' ref={headerRef}>
        <div className='flex justify-between items-center'>
          <h5>Messages</h5>
          <button
            className='text-accent text-lg transition hover:text-red'
            onClick={onClose}
            aria-label='Close messages panel'
          >
            <i className='icon-circle-xmark-regular' />
          </button>
        </div>
        <div className='flex mt-[18px]'>
          {MESSAGE_OPTIONS.map((item, index) => (
            <FilterItem
              key={index}
              text={item.label}
              value={item.value}
              active={filter}
              qty={getQty(item.value)}
              onClick={() => setFilter(item.value)}
            />
          ))}
        </div>
      </div>
      <div
        className='h-full overflow-y-auto flex-1'
        style={{ height: `calc(100vh - ${headerHeight + footerHeight}px)` }}
      >
        {sortedData()
          .slice(0, displayed)
          .map((message, index) => (
            <MessageItem key={`${message.id}-${filter}`} message={message} index={index} />
          ))}
      </div>
      <div className='p-[30px]' ref={footerRef}>
        <button
          className='btn btn--secondary w-full'
          onClick={handleLoadMore}
          disabled={displayed >= (filteredData() as MessageType[]).length}
        >
          Load More
        </button>
      </div>
    </DrawerBase>
  )
}

export default MessagesPanel
