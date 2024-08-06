import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderLockFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-lock-fill_svg__a)"><path fill="#000" d="M13.5 4.5H8.207L6.5 2.793a1 1 0 0 0-.707-.293H2.5a1 1 0 0 0-1 1v9.039a.96.96 0 0 0 .961.961h4.574a.5.5 0 0 0 0-1H2.5v-7h11v1a.5.5 0 0 0 1 0v-1a1 1 0 0 0-1-1m-11 0v-1h3.293l1 1zM14 10h-.5v-.25a1.75 1.75 0 0 0-3.5 0V10h-.5a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.5-.5m-1.5 0H11v-.25a.75.75 0 1 1 1.5 0z" /></g><defs><clipPath id="folder-lock-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderLockFill);
const Memo = memo(ForwardRef);
export default Memo;