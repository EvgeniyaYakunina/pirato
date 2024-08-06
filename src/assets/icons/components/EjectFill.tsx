import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEjectFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#eject-fill_svg__a)"><path fill="#000" d="M2.082 7.89a.97.97 0 0 1 .194-1.07l4.608-4.844a1.547 1.547 0 0 1 2.232 0l4.608 4.844a.97.97 0 0 1 .194 1.07 1.01 1.01 0 0 1-.933.61h-9.97a1.01 1.01 0 0 1-.933-.61M13 9.5H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1" /></g><defs><clipPath id="eject-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEjectFill);
const Memo = memo(ForwardRef);
export default Memo;