import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapTrifoldFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#map-trifold-fill_svg__a)"><path fill="#000" d="M14.308 3.106a.5.5 0 0 0-.43-.09l-3.82.954-3.834-1.917a.5.5 0 0 0-.345-.038l-4 1A.5.5 0 0 0 1.5 3.5v9a.5.5 0 0 0 .621.485l3.82-.955 3.835 1.918a.5.5 0 0 0 .345.037l4-1a.5.5 0 0 0 .379-.485v-9a.5.5 0 0 0-.193-.394M6 11a.5.5 0 0 0-.121.015L2.5 11.86V3.891l3.442-.86.058.028zm7.5 1.11-3.442.86-.058-.029v-7.94a.5.5 0 0 0 .121-.015L13.5 4.14z" /></g><defs><clipPath id="map-trifold-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMapTrifoldFill);
const Memo = memo(ForwardRef);
export default Memo;