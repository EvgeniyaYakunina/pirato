import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSolarRoofFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#solar-roof-fill_svg__a)"><path fill="#000" d="m15.448 7.776-2.5-5A.5.5 0 0 0 12.5 2.5h-9a.5.5 0 0 0-.447.276l-2.5 5A.5.5 0 0 0 .5 8v3.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V8a.5.5 0 0 0-.053-.224M6.19 3.5l.75 1.5H5.06l-.75-1.5zm3 0 .75 1.5H8.06l-.75-1.5zm-2.882 4L5.559 6H7.44l.75 1.5zm3 0L8.559 6h1.882l.75 1.5zm3 0-.75-1.5h1.882l.75 1.5zM12.94 5H11.06l-.75-1.5h1.882zM6.5 11.5v-3h8v3z" /></g><defs><clipPath id="solar-roof-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSolarRoofFill);
const Memo = memo(ForwardRef);
export default Memo;