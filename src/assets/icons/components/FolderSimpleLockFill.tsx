import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderSimpleLockFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-simple-lock-fill_svg__a)"><path fill="#000" d="M14 10h-.5v-.25a1.75 1.75 0 0 0-3.5 0V10h-.5a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.5-.5m-1.5 0H11v-.25a.75.75 0 1 1 1.5 0zm2-4.5v1a.5.5 0 0 1-1 0v-1H8.167c-.216 0-.427-.07-.6-.2L5.833 4H2.5v8.5H7a.5.5 0 0 1 0 1H2.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3.333c.216 0 .427.07.6.2l1.734 1.3H13.5a1 1 0 0 1 1 1" /></g><defs><clipPath id="folder-simple-lock-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderSimpleLockFill);
const Memo = memo(ForwardRef);
export default Memo;