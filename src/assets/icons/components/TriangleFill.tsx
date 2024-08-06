import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTriangleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#triangle-fill_svg__a)"><path fill="#000" d="M14.799 13.238a1.52 1.52 0 0 1-1.333.762H2.534A1.52 1.52 0 0 1 1 12.497c0-.26.07-.516.201-.741l5.465-9.492a1.548 1.548 0 0 1 2.668 0l5.466 9.492a1.47 1.47 0 0 1-.001 1.482" /></g><defs><clipPath id="triangle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTriangleFill);
const Memo = memo(ForwardRef);
export default Memo;