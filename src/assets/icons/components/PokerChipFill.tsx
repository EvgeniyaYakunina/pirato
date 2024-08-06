import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPokerChipFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#poker-chip-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M3.775 4.483l1.067 1.066A4 4 0 0 0 4.029 7.5H2.523c.1-1.11.537-2.162 1.252-3.017M2.523 8.5h1.51c.09.712.37 1.386.812 1.95l-1.07 1.068A5.48 5.48 0 0 1 2.523 8.5M7.5 13.477a5.48 5.48 0 0 1-3.017-1.25l1.066-1.067c.566.44 1.24.719 1.951.807zm0-9.445c-.712.09-1.386.371-1.95.813l-1.067-1.07A5.48 5.48 0 0 1 7.5 2.525zM13.477 7.5h-1.51a4 4 0 0 0-.809-1.95l1.067-1.067A5.48 5.48 0 0 1 13.477 7.5M8.5 2.523c1.11.1 2.162.536 3.018 1.25L10.45 4.842A4 4 0 0 0 8.5 4.029zm0 10.954v-1.51a4 4 0 0 0 1.95-.809l1.068 1.067A5.48 5.48 0 0 1 8.5 13.477m3.725-1.96-1.067-1.066c.44-.566.72-1.24.81-1.951h1.509a5.48 5.48 0 0 1-1.252 3.018" /></g><defs><clipPath id="poker-chip-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPokerChipFill);
const Memo = memo(ForwardRef);
export default Memo;