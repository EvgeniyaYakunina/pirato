import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaintBucketFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paint-bucket-fill_svg__a)"><path fill="#000" d="M16 13a1.5 1.5 0 0 1-3 0c0-1.12.973-2.61 1.084-2.777a.5.5 0 0 1 .832 0C15.026 10.389 16 11.88 16 13M8.28 7.78a.751.751 0 0 0-1.062-1.062.75.75 0 0 0 1.062 1.059zM2.353 1.147a.5.5 0 0 0-.707.708L3.684 3.89l.706-.703zm12.305 7.546a.5.5 0 0 0 .196-.828L7.635.646a.5.5 0 0 0-.706 0L4.39 3.188l2.527 2.526a1.75 1.75 0 1 1-.707.707l-2.526-2.53L.937 6.636a1.5 1.5 0 0 0 0 2.121l5.306 5.306a1.5 1.5 0 0 0 2.121 0l4.906-4.906z" /></g><defs><clipPath id="paint-bucket-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaintBucketFill);
const Memo = memo(ForwardRef);
export default Memo;