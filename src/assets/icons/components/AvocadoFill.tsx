import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAvocadoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#avocado-fill_svg__a)"><path fill="#000" d="m13.188 8.166-1.863-5.262A3.5 3.5 0 0 0 4.7 2.833L2.856 8.052a5.5 5.5 0 1 0 10.332.114M8 12.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" /></g><defs><clipPath id="avocado-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAvocadoFill);
const Memo = memo(ForwardRef);
export default Memo;