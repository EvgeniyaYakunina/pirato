import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVolleyballFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#volleyball-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m5.477 6h-2.141a6.5 6.5 0 0 0-2.237-4.89 5.51 5.51 0 0 1 4.378 4.89M2.783 9.742A5.5 5.5 0 0 1 4.83 3.508L5.9 5.361a6.5 6.5 0 0 0-3.116 4.38m.898 1.66A5.5 5.5 0 0 1 6.4 6.228L7.423 8l-2.594 4.492a5.5 5.5 0 0 1-1.148-1.09m9.428-1.366a5.5 5.5 0 0 1-5.843.237L8.289 8.5h5.187a5.5 5.5 0 0 1-.367 1.536" /></g><defs><clipPath id="volleyball-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVolleyballFill);
const Memo = memo(ForwardRef);
export default Memo;