import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHourglassFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hourglass-fill_svg__a)"><path fill="#000" d="M12.5 4.728V2.5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 0 .4.8L7.168 8 3.9 10.45a1 1 0 0 0-.4.8v2.25a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2.227a1 1 0 0 0-.398-.799L8.83 8l3.273-2.474a1 1 0 0 0 .398-.798" /></g><defs><clipPath id="hourglass-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHourglassFill);
const Memo = memo(ForwardRef);
export default Memo;