import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAnchorFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#anchor-fill_svg__a)"><path fill="#000" d="M14 9c0 2.382-1.73 2.854-3.119 3.233-1.52.415-2.381.724-2.381 2.267a.5.5 0 1 1-1 0c0-1.543-.86-1.852-2.381-2.267C3.729 11.853 2 11.383 2 9a.5.5 0 0 1 1 0c0 1.543.86 1.853 2.381 2.268.71.193 1.508.412 2.119.896V8h-2a.5.5 0 1 1 0-1h2V5.177a1.75 1.75 0 1 1 1 0V7h2a.5.5 0 0 1 0 1h-2v4.164c.611-.484 1.409-.703 2.119-.896C12.139 10.853 13 10.543 13 9a.5.5 0 0 1 1 0" /></g><defs><clipPath id="anchor-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAnchorFill);
const Memo = memo(ForwardRef);
export default Memo;