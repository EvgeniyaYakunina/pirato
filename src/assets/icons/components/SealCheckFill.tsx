import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSealCheckFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#seal-check-fill_svg__a)"><path fill="#000" d="M14.116 6.426c-.235-.246-.48-.5-.571-.723-.085-.204-.09-.543-.095-.871-.01-.61-.02-1.301-.5-1.782-.48-.48-1.172-.49-1.782-.5-.328-.005-.667-.01-.871-.095-.223-.092-.477-.336-.723-.571C9.143 1.469 8.653 1 8 1c-.652 0-1.142.47-1.574.884-.246.235-.5.48-.723.571-.203.085-.543.09-.871.095-.61.01-1.301.02-1.782.5-.48.48-.487 1.172-.5 1.782-.005.328-.01.667-.095.871-.092.223-.336.477-.571.723C1.469 6.857 1 7.348 1 8s.47 1.142.884 1.574c.235.246.48.5.571.723.085.204.09.543.095.871.01.61.02 1.301.5 1.782.48.48 1.172.49 1.782.5.328.005.667.01.871.095.223.092.477.336.723.571.431.415.922.884 1.574.884s1.142-.47 1.574-.884c.246-.235.5-.48.723-.571.204-.085.543-.09.871-.095.61-.01 1.301-.02 1.782-.5.48-.48.49-1.172.5-1.782.005-.328.01-.667.095-.871.092-.223.336-.477.571-.723C14.531 9.143 15 8.653 15 8c0-.652-.47-1.142-.884-1.574m-3.262.428-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.501.501 0 0 1 .708.708" /></g><defs><clipPath id="seal-check-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSealCheckFill);
const Memo = memo(ForwardRef);
export default Memo;