import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGraphicsCardFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#graphics-card-fill_svg__a)"><path fill="#000" d="M14.5 3H1a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1.25 4.5c0 .424-.12.84-.346 1.197L9.803 5.597A2.25 2.25 0 0 1 13.25 7.5m-6 0c0 .424-.12.84-.346 1.197L3.803 5.597A2.25 2.25 0 0 1 7.25 7.5M5 9.75a2.25 2.25 0 0 1-1.904-3.447l3.101 3.101A2.24 2.24 0 0 1 5 9.75M8.75 7.5c0-.424.12-.84.346-1.197l3.101 3.101A2.25 2.25 0 0 1 8.75 7.5" /></g><defs><clipPath id="graphics-card-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGraphicsCardFill);
const Memo = memo(ForwardRef);
export default Memo;