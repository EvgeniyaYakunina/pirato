import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBeerSteinFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#beer-stein-fill_svg__a)"><path fill="#000" d="M13.5 5.5h-1v-1A2.5 2.5 0 0 0 10 2h-.699c-.744-.637-1.75-1-2.801-1-2.206 0-4 1.57-4 3.5V13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.5h1A1.5 1.5 0 0 0 15 11V7a1.5 1.5 0 0 0-1.5-1.5m-7 6a.5.5 0 0 1-1 0v-5a.5.5 0 1 1 1 0zm3 0a.5.5 0 0 1-1 0v-5a.5.5 0 1 1 1 0zM3.563 4C3.84 2.86 5.053 2 6.5 2c.867 0 1.691.313 2.263.861A.5.5 0 0 0 9.11 3H10a1.5 1.5 0 0 1 1.414 1zM14 11a.5.5 0 0 1-.5.5h-1v-5h1a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="beer-stein-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBeerSteinFill);
const Memo = memo(ForwardRef);
export default Memo;