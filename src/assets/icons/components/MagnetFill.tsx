import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMagnetFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#magnet-fill_svg__a)"><path fill="#000" d="M12.937 3.14a5.47 5.47 0 0 0-3.9-1.64h-.02a5.47 5.47 0 0 0-3.892 1.613L1.288 7a1 1 0 0 0 .004 1.41l1.79 1.791a1 1 0 0 0 .708.293h.006a1 1 0 0 0 .71-.3l3.806-3.9a1.005 1.005 0 0 1 1.401-.014.98.98 0 0 1 .296.7 1.06 1.06 0 0 1-.304.75l-3.893 3.762a1 1 0 0 0-.01 1.425l1.791 1.791A1.004 1.004 0 0 0 9 14.716l3.863-3.778c2.153-2.157 2.186-5.653.074-7.797M3.79 9.494 2 7.703l1.839-1.864 1.78 1.78zM8.3 14l-1.793-1.79 1.883-1.821 1.78 1.78z" /></g><defs><clipPath id="magnet-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMagnetFill);
const Memo = memo(ForwardRef);
export default Memo;