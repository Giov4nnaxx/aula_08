import styles from "./styles.module.css"

type DefaultButtonProps = {
}& React.ComponentProps<'button'>
    

export function DefaultButton({
    ...props
}: DefaultButtonProps) {
    return (
        <>
        <button className={styles.button} {...props}>Enviar</button>
        </>
    )
}