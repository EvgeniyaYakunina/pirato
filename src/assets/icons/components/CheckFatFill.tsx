import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCheckFatFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#check-fat-fill_svg__a)"><path fill="#000" d="m15.207 5.682-8.025 8.025a1 1 0 0 1-1.414 0l-4.476-4.5a1 1 0 0 1 0-1.413l1.25-1.25a1 1 0 0 1 1.411 0L6.5 9.014l6.047-5.973a1 1 0 0 1 1.412 0l1.247 1.221a1 1 0 0 1 0 1.42" /></g><defs><clipPath id="check-fat-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCheckFatFill);
const Memo = memo(ForwardRef);
export default Memo;