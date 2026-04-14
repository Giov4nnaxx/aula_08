import styles from "./styles.module.css"

type DefaultButtonProps = {
    id: string;
    text: string;
    type: string;
}& React.ComponentProps<'button'>
    

export function DefaultButton({
    id,
    text,
    type,
    ...props
}: DefaultButtonProps) {
    return (
        <>
        <button id = {id} type={type} className={styles.button} {...props}> {text}</button>
        </>
    )
}