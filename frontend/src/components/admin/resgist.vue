<template>
	<div class="container">
		<div class="panel1">
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="name">
					<el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
				</el-form-item>

				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>{{str}}
					<el-button @click="resetForm('ruleForm2')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			var checkAge = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('年龄不能为空'));
				}
//			
			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm2: {
					name:"",
					pass: '',
					checkPass: '',
					age: ''
				},
				str:"",
				rules2: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					age: [{
						validator: checkAge,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
//						alert('submit!');
//						console.log(this.ruleForm2.name,this.ruleForm2.pass)
						var obj = {username:this.ruleForm2.name,pass:this.ruleForm2.pass}
						this.$store.dispatch('GetResgist').then(res=>{
							var arr=res.data;
							var flag=true;
							for(var key in arr){
								if(arr[key].username==obj.username){
									flag = false;
									alert('用户名已经存在');
									break;
								}
							}
							if(flag){
								this.$store.dispatch('addres',obj).then(res=>{
									this.str = res.data;
									this.$router.push({name:"login"})
									alert('注册成功')
								})
							}
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
	.container {
		background: gray;
		width: 100%;
		height: 100%;
		padding: 50px;
	}
	
	.panel1 {
		width: 300px;
		padding: 50px;
		background: white;
		margin: 0 auto;
	}
	
	.el-button {}
</style>