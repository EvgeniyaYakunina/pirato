import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCylinderFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cylinder-fill_svg__a)"><path fill="#000" d="M8 1C5.477 1 3.5 2.208 3.5 3.75v8.5C3.5 13.792 5.477 15 8 15s4.5-1.208 4.5-2.75v-8.5C12.5 2.208 10.523 1 8 1m0 13c-1.864 0-3.5-.818-3.5-1.75V4.84C5.183 5.53 6.494 6 8 6s2.818-.469 3.5-1.16v7.41C11.5 13.182 9.864 14 8 14" /></g><defs><clipPath id="cylinder-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCylinderFill);
const Memo = memo(ForwardRef);
export default Memo;