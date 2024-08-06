import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHourglassMediumFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hourglass-medium-fill_svg__a)"><path fill="#000" d="M12.5 4.728V2.5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 0 .4.8L7.167 8 3.9 10.45a1 1 0 0 0-.4.8v2.25a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2.227a1 1 0 0 0-.397-.799L8.83 8l3.274-2.474a1 1 0 0 0 .397-.798m-1 6.545V13.5h-7v-2.25L7.5 9v1.5a.5.5 0 0 0 1 0V9.005zm0-6.545L11.14 5H4.832L4.5 4.75V2.5h7z" /></g><defs><clipPath id="hourglass-medium-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHourglassMediumFill);
const Memo = memo(ForwardRef);
export default Memo;