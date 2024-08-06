import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSunFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sun-fill_svg__a)"><path fill="#000" d="M7.5 2.5V1a.5.5 0 0 1 1 0v1.5a.5.5 0 1 1-1 0M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-4.354.354a.5.5 0 1 0 .708-.708l-1-1a.5.5 0 1 0-.708.708zm0 7.292-1 1a.5.5 0 0 0 .708.708l1-1a.501.501 0 0 0-.708-.708M12 4.5a.5.5 0 0 0 .354-.146l1-1a.5.5 0 0 0-.708-.708l-1 1A.5.5 0 0 0 12 4.5m.354 7.146a.5.5 0 0 0-.708.708l1 1a.501.501 0 0 0 .708-.708zM3 8a.5.5 0 0 0-.5-.5H1a.5.5 0 0 0 0 1h1.5A.5.5 0 0 0 3 8m5 5a.5.5 0 0 0-.5.5V15a.5.5 0 0 0 1 0v-1.5A.5.5 0 0 0 8 13m7-5.5h-1.5a.5.5 0 0 0 0 1H15a.5.5 0 0 0 0-1" /></g><defs><clipPath id="sun-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSunFill);
const Memo = memo(ForwardRef);
export default Memo;