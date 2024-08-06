import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGearFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gear-fill_svg__a)"><path fill="#000" d="M13.5 8.135a5 5 0 0 0 0-.27l.932-1.165a.5.5 0 0 0 .093-.441 6.7 6.7 0 0 0-.68-1.64.5.5 0 0 0-.375-.246l-1.482-.165a5 5 0 0 0-.188-.188l-.175-1.486a.5.5 0 0 0-.246-.375 6.7 6.7 0 0 0-1.64-.679.5.5 0 0 0-.442.093L8.135 2.5h-.27L6.7 1.57a.5.5 0 0 0-.441-.093 6.7 6.7 0 0 0-1.64.68.5.5 0 0 0-.246.375l-.165 1.485a6 6 0 0 0-.188.187l-1.486.171a.5.5 0 0 0-.375.246 6.7 6.7 0 0 0-.68 1.64.5.5 0 0 0 .094.442L2.5 7.865v.27L1.57 9.3a.5.5 0 0 0-.093.441c.153.575.382 1.127.68 1.64a.5.5 0 0 0 .375.246l1.482.165q.093.099.188.188l.173 1.486a.5.5 0 0 0 .246.375 6.7 6.7 0 0 0 1.64.68.5.5 0 0 0 .442-.094l1.162-.927q.135.003.27 0l1.165.932a.5.5 0 0 0 .441.093 6.7 6.7 0 0 0 1.64-.68.5.5 0 0 0 .246-.375l.165-1.482q.099-.093.188-.188l1.486-.175a.5.5 0 0 0 .375-.246 6.7 6.7 0 0 0 .68-1.64.5.5 0 0 0-.094-.442zM8 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" /></g><defs><clipPath id="gear-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGearFill);
const Memo = memo(ForwardRef);
export default Memo;