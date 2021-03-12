export default [
	{
		path: "/reset-password/:token",
		name: "ResetPassword",
		component: () => import(/* webpackChunkName: "ResetPassword"*/ "../../views/auth/ResetPasswordView"),
		meta: {
			title: "Restablecer Contraseña"
		}
	}
];