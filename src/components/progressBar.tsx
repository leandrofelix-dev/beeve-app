import { View } from "react-native"


interface IProgressBarProps {
  progress: number
}

export default function ProgressBar({ progress }: IProgressBarProps) {
  return (
    <View>
      <View className="bg-gray200 h-2 w-full rounded-full"></View>
      <View className='bg-purple h-2 rounded-full -mt-2' style={{width:`${progress}%`}}></View>
    </View>
  )
}
