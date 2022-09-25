import Toast from "react-native-root-toast"

export default function ToastMessage (message,color, position) {
    return (

Toast.show(message,
{
    containerStyle: {
        backgroundColor: color
    }, position: position
}
))
}

