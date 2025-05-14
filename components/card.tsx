import "../global.css"
import { View } from "react-native";
import clsx from 'clsx';

type Props = {
  children: ReactNode
  className?: string
}

export function Card({ children, className}: Props) {
return (
<View
  className={clsx(
      className
  )}
>
  {children}
</View>
)
}
