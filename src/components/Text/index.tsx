import styles from "./Text.module.css"

type TextProps = {
    children: string | string[];
    shadow?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

function Text({children, shadow, className, style}: TextProps) {
    return (
        <p className={`${styles.text} ${shadow?styles.shadow:""} ${className}`} style={style}>{children}</p>
    )
}

export default Text;