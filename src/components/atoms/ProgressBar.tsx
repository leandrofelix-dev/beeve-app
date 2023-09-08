import { View } from 'react-native'

interface IProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: IProgressBarProps) {
  return (
    <View>
      <View className="h-2 w-full rounded-full bg-gray200"></View>
      <View
        className="-mt-2 h-2 rounded-full bg-purple"
        style={{ width: `${progress}%` }}
      ></View>
    </View>
  )
}
