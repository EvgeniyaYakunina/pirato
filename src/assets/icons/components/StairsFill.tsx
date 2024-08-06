import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStairsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#stairs-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-2.5 5h2.5V8H10zM7 9h5.5v1.5H7zm5.5 4.5h-9v-2h9z" /></g><defs><clipPath id="stairs-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStairsFill);
const Memo = memo(ForwardRef);
export default Memo;