import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWarehouseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#warehouse-fill_svg__a)"><path fill="#000" d="M15 11.5h-.5V3.619l.604-.13a.5.5 0 1 0-.209-.978l-14 3a.5.5 0 0 0 .21.978l.395-.085V11.5H1a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1m-3.5 0h-7v-1h7zm0-2h-7v-1h7z" /></g><defs><clipPath id="warehouse-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWarehouseFill);
const Memo = memo(ForwardRef);
export default Memo;