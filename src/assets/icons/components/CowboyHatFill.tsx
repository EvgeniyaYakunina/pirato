import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCowboyHatFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cowboy-hat-fill_svg__a)"><path fill="#000" d="M13.5 7.5a.5.5 0 0 0-.424.235q-.392.63-.863 1.203l-.102-.536-.966-5.085a1 1 0 0 0-1.607-.597l-.009.006L8 4 6.47 2.726l-.007-.006a1 1 0 0 0-1.608.596l-.966 5.083-.102.539a11 11 0 0 1-.863-1.203A.5.5 0 0 0 2.5 7.5a2.5 2.5 0 1 0 0 5h11a2.5 2.5 0 0 0 0-5M4.793 9h6.414l.159.835a7 7 0 0 1-1.71 1.187c-.962.464-1.652.478-1.656.478-.02 0-1.593-.025-3.366-1.662z" /></g><defs><clipPath id="cowboy-hat-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCowboyHatFill);
const Memo = memo(ForwardRef);
export default Memo;