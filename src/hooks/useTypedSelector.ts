import { RootState } from '@/store/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const TypeSelector: TypedUseSelectorHook<RootState> = useSelector
