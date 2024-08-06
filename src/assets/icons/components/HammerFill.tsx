import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHammerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hammer-fill_svg__a)"><path fill="#000" d="m15.709 7-4.216-4.245a6.006 6.006 0 0 0-8.486 0L3 2.761l-.86.889a.5.5 0 0 0 .718.696l.858-.887c.345-.345.74-.638 1.17-.868L7.791 5.5l-6 6a1 1 0 0 0 0 1.414l1.294 1.293a1 1 0 0 0 1.414 0l6-6 2 2a1 1 0 0 0 1.414 0l1.793-1.793A1 1 0 0 0 15.71 7m-5.563.146L8.75 8.542 7.457 7.25l1.397-1.397a.5.5 0 0 0 0-.707L5.895 2.187a5 5 0 0 1 4.89 1.276l2.763 2.782-1.798 1.796-.896-.896a.5.5 0 0 0-.708 0m3.063 2.353-.75-.75 1.791-1.796.75.75z" /></g><defs><clipPath id="hammer-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHammerFill);
const Memo = memo(ForwardRef);
export default Memo;