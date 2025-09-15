import OptionsBackground from '../OptionsBackground';
import styles from './ScrollView.module.css';

type ScrollViewProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    contentContainerStyle?: React.CSSProperties;
    contentContainerClassName?: string;
}

function ScrollView({ children, style, className, contentContainerStyle, contentContainerClassName }: ScrollViewProps) {
  return (
    <div className={`${styles.container} ${className}`} style={style}>
        <div className={`${styles.content} ${contentContainerClassName}`} style={contentContainerStyle}>
            <OptionsBackground style={{filter: "brightness(0.125)"}}/>
            {children}
        </div>
    </div>
  );
}

export default ScrollView;