import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGlobeHemisphereEastFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#globe-hemisphere-east-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M3.893 11.654l.158-.103a1 1 0 0 0 .449-.83l.013-2.265L5.823 6.5l.02.014 1.23.804c.206.146.459.207.709.173l1.968-.267a1 1 0 0 0 .625-.338l1.386-1.61A1 1 0 0 0 12 4.625v-.396a5.49 5.49 0 0 1 1.236 5.459l-1.01-.923a1 1 0 0 0-1.057-.187l-1.904.79a1 1 0 0 0-.605.778l-.15 1.012a1 1 0 0 0 .736 1.113l1.342.354.147.148a5.49 5.49 0 0 1-6.842-1.119" /></g><defs><clipPath id="globe-hemisphere-east-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGlobeHemisphereEastFill);
const Memo = memo(ForwardRef);
export default Memo;