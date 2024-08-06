import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileMagnifyingGlassFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-magnifying-glass-fill_svg__a)"><path fill="#000" d="M9 9.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.5-3.75v8a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h6a.5.5 0 0 1 .354.146l3.5 3.5a.5.5 0 0 1 .146.354m-3.146 5.646-.7-.7a2.253 2.253 0 1 0-.707.708l.7.7a.5.5 0 0 0 .707-.708M12.25 5.5 9.5 2.75V5.5z" /></g><defs><clipPath id="file-magnifying-glass-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileMagnifyingGlassFill);
const Memo = memo(ForwardRef);
export default Memo;