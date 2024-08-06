import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBeachBallFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#beach-ball-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m5.215 4.75a12.2 12.2 0 0 0-2.902-.562 12.2 12.2 0 0 0-.563-2.903 5.53 5.53 0 0 1 3.465 3.465M5.313 3.203c1.557.514 2.99 1.349 4.206 2.45-2.5-.022-4.948.721-7.014 2.129a5.5 5.5 0 0 1 2.808-4.58m2.904 10.292a12.27 12.27 0 0 0 2.13-7.014 11.8 11.8 0 0 1 2.45 4.207 5.5 5.5 0 0 1-4.579 2.807" /></g><defs><clipPath id="beach-ball-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBeachBallFill);
const Memo = memo(ForwardRef);
export default Memo;