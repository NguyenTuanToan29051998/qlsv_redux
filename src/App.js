
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Table } from 'antd';
import { useState } from 'react';
import { Modal } from 'antd';
import { Input, Collapse } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import student from './actions/studentAction';
import classAction from './actions/classAction';
import teacherAction from './actions/teacherAction';




import { useEffect } from 'react';

function App() {
	// sinh vien
	const list_student = useSelector(state => state.st);
	const [listStudent, setListST] = useState([])
	const [idST, setIdST] = useState(['']);
	const [nameST, setNameST] = useState("");
	const [genderST, setGenderST] = useState("");
	const [addressST, setAddressST] = useState("");
	const [idClick, setIdClick] = useState("");
	const [isModalVisibleDeleteST, setIsModalVisibleDeleteST] = useState(false);
	const [isModalVisibleUpdateST, setIsModalVisibleUpdateST] = useState(false);
	const [isModalVisibleAddST, setIsModalVisibleAdd] = useState(false);
	useEffect(() => {
		setListST([...list_student.listStudent])
	}, [list_student])
	// lop
	const list_class = useSelector(state => state.cl)
	const [idClass, setIdClass] = useState('')
	const [nameClass, setNameClass] = useState("");
	const [listClass, setListClass] = useState();
	const [isModalVisibleDeleteClass, setIsModalVisibleDeleteClass] = useState(false);
	const [isModalVisibleUpdateClass, setIsModalVisibleUpdateClass] = useState(false);
	const [isModalVisibleAddClass, setIsModalVisibleAddClass] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		setListClass([...list_class.listClass])
	}, [list_class])
	// Giao vien
	const list_teacher = useSelector(state => state.tc)
	const [idTeacher, setIdTeacher] = useState('')
	const [nameTeacher, setNameTeacher] = useState("");
	const [genderTC, setGenderTeacher] = useState("");
	const [addressTC, setAddressTeacher] = useState("");
	const [listTeacher, setListTeacher] = useState();
	const [isModalVisibleDeleteTeacher, setIsModalVisibleDeleteTeacher] = useState(false);
	const [isModalVisibleUpdateTeacher, setIsModalVisibleUpdateTeacher] = useState(false);
	const [isModalVisibleAddTeacher, setIsModalVisibleAddTeacher] = useState(false);
	useEffect(() => {
		setListTeacher([...list_teacher.listTeacher])
	}, [list_teacher])
	const columnsST = [
		{
			title: 'ID',
			dataIndex: 'ma_sv',
		},
		{
			title: 'Name',
			dataIndex: 'ten_sv',
		},
		{
			title: 'Gender',
			dataIndex: 'gioi_tinh',
		},
		{
			title: 'Address',
			dataIndex: 'que_quan',
		},
		{
			title: "ACTIONS",
			dataIndex: 'ma_sv',
			render: (ma_sv) => (
				<>
					<button onClick={() => updateDataST(ma_sv)}> Sửa </button>
					<button onClick={() => deleteDataST(ma_sv)} >Xóa </button>
				</>
			)
		}

	];

	const columnsClass = [
		{
			title: 'ID',
			dataIndex: 'ma_lop',
		},
		{
			title: 'Name',
			dataIndex: 'ten_lop',
		},

		{
			title: "ACTIONS",
			dataIndex: 'ma_lop',
			render: (ma_lop) => (
				<>
					<button onClick={() => updateDataClass(ma_lop)}> Sửa </button>
					<button onClick={() => deleteDataClass(ma_lop)} >Xóa </button>
				</>
			)
		}
	];
	const columnsTeacher = [
		{
			title: 'ID',
			dataIndex: 'ma_gv',
		},
		{
			title: 'Name',
			dataIndex: 'ten_gv',
		},
		{
			title: 'Gender',
			dataIndex: 'gioi_tinh',
		},
		{
			title: 'Address',
			dataIndex: 'que_quan',
		},
		{
			title: "ACTIONS",
			dataIndex: 'ma_gv',
			render: (ma_gv) => (
				<>
					<button onClick={() => updateDataTeacher(ma_gv)}> Sửa </button>
					<button onClick={() => deleteDataTeacher(ma_gv)} >Xóa </button>
				</>
			)
		}
	];
	//xóa sinh viên
	const deleteDataST = (ma_gv) => {
		setIdClick(ma_gv);
		setIsModalVisibleDeleteST(true);
	};
	const handleOkDeleteST = () => {
		setIdClick(0)
		setIsModalVisibleDeleteST(false);
		dispatch(student.deleteStudent(idClick));
	};
	const handleCancelDeleteST = () => {
		setIsModalVisibleDeleteST(false);
	};

	// sửa thông tin sinh viên
	const updateDataST = (ma_sv) => {
		console.log(ma_sv);
		setIdClick(ma_sv)
		setIsModalVisibleUpdateST(true);
	};
	const handleOkUpdateST = () => {
		setIsModalVisibleUpdateST(false);
		const obj = {
			ten_sv: nameST,
			gioi_tinh: genderST,
			que_quan: addressST
		}
		dispatch(student.action.updateStudent(obj))
	};
	const handleCancelUpdateST = () => {
		setIsModalVisibleUpdateST(false);
	};
	// thêm sinh viên
	const addDataST = () => {
		setIsModalVisibleAdd(true);
	};
	const handleOkAddST = () => {
		setIsModalVisibleAdd(false);
		const obj = {
			ma_sv: idST,
			ten_sv: nameST,
			gioi_tinh: genderST,
			que_quan: addressST
		}
		dispatch(student.action.addNewStudent(obj))
	};

	const handleCancelAddST = () => {
		setIsModalVisibleAdd(false);
	};

	const onChangeMaSV = (event) => {
		setIdST(event.target.value);
	}
	const onChangeNameST = (event) => {
		setNameST(event.target.value);

	}
	const onChangeGenderST = (event) => {
		setGenderST(event.target.value);
	}
	const onChangeAddressST = (event) => {
		setAddressST(event.target.value);
	}

	//xóa lop
	const deleteDataClass = (ma_lop) => {
		setIdClick(ma_lop)
		setIsModalVisibleDeleteClass(true);
	};
	const handleOkDeleteClass = () => {
		setIsModalVisibleDeleteClass(false);
		dispatch(classAction.action.deleteClass(idClick))
	};

	const handleCancelDeleteClass = () => {
		setIsModalVisibleDeleteClass(false);
	};
	// sửa thông tin lop
	const updateDataClass = (ma_lop) => {
		setIsModalVisibleUpdateClass(true);
		setIdClick(ma_lop);

	};
	const handleOkUpdateClass = () => {
		setIsModalVisibleUpdateClass(false);
		const obj = {
			ma_lop: idClass,
			ten_lop: nameClass
		}
		dispatch(classAction.action.updateClass(idClick, obj));
	};

	const handleCancelUpdateClass = () => {
		setIsModalVisibleUpdateClass(false);
	};

	// thêm lop
	const addDataClass = () => {
		setIsModalVisibleAddClass(true);
	};
	const handleOkAddClass = () => {
		setIsModalVisibleAddClass(false);
		const obj = {
			ma_lop: idClass,
			ten_lop: nameClass,
		}
		dispatch(classAction.action.addNewClass(obj))
	};

	const handleCancelAddClass = () => {
		setIsModalVisibleAddClass(false);
	};

	const onChangeIdClass = (event) => {
		setIdClass(event.target.value);
	}
	const onChangeNameClass = (event) => {
		setNameClass(event.target.value);
	}

	//xóa giao vien
	const deleteDataTeacher = (ma_gv) => {
		setIdClick(ma_gv)
		setIsModalVisibleDeleteTeacher(true);
	};
	const handleOkDeleteTeacher = () => {
		setIsModalVisibleDeleteTeacher(false);
		dispatch(teacherAction.action.deleteTEACHER(idClick))

	};

	const handleCancelDeleteTeacher = () => {
		setIsModalVisibleDeleteTeacher(false);
	};
	// sửa thông tin giáo viên
	const updateDataTeacher = (ma_gv) => {
		setIdClick(ma_gv);
		setIsModalVisibleUpdateTeacher(true);


	};
	const handleOkUpdateTeacher = () => {
		setIsModalVisibleUpdateTeacher(false);
		const obj = {
			ma_gv: idTeacher,
			ten_gv: nameTeacher,
			gioi_tinh: genderTC,
			que_quan: addressTC
		}
		dispatch(teacherAction.action.updateTEACHER(idClick, obj))
	};

	const handleCancelUpdateTeacher = () => {
		setIsModalVisibleUpdateTeacher(false);
	};

	// thêm giáo viên
	const addDataTeacher = () => {
		setIsModalVisibleAddTeacher(true);
	};
	const handleOkAddTeacher = () => {
		setIsModalVisibleAddTeacher(false);
		const obj = {
			ma_gv: idTeacher,
			ten_gv: nameTeacher,
			gioi_tinh: genderTC,
			que_quan: addressTC,
		}
		dispatch(teacherAction.action.addNEWTEACHER(obj))

	}
	const handleCancelAddTeacher = () => {
		setIsModalVisibleAddTeacher(false);
	};

	const onChangeIdTeacher = (event) => {
		setIdTeacher(event.target.value);
	}
	const onChangeNameTeacher = (event) => {
		setNameTeacher(event.target.value);
	}
	const onChangeGenderTeacher = (event) => {
		setGenderTeacher(event.target.value);
	}
	const onChangeAddressTeacher = (event) => {
		setAddressTeacher(event.target.value);
	}
	const { Panel } = Collapse;
	return (
		<div className="App">
			<Collapse defaultActiveKey={['1']} >
				<Panel header="Sinh Viên" key="1">
					<button onClick={() => addDataST()}  >Thêm Sinh Viên</button>
					<Table dataSource={listStudent} columns={columnsST} />
					<Modal title="Thông Báo" visible={isModalVisibleDeleteST} onOk={() => { handleOkDeleteST() }} onCancel={handleCancelDeleteST}>
						<p>Bạn có muốn xóa sinh viên không</p>
					</Modal>
					<Modal title="Thay đổi thông tin sinh viên" visible={isModalVisibleUpdateST} onOk={() => { handleOkUpdateST() }} onCancel={handleCancelUpdateST}>
						<p>Tên Sinh Viên</p>
						<Input placeholder="Nhập tên sinh viên" onChange={(event) => { onChangeNameST(event) }} />
						<p>Giới Tính</p>
						<Input placeholder="Nhập giới tính sinh viên" onChange={(event) => { onChangeGenderST(event) }} />
						<p>Địa Chỉ</p>
						<Input placeholder="Nhập giới tính sinh viên" onChange={(event) => { onChangeAddressST(event) }} />
					</Modal>

					<Modal title="Thêm sinh viên" visible={isModalVisibleAddST} onOk={() => { handleOkAddST() }} onCancel={handleCancelAddST}>
						<p>Mã Sinh Viên</p>
						<Input placeholder="Nhập Mã sinh viên" onChange={(event) => { onChangeMaSV(event) }} />
						<p>Tên Sinh Viên</p>
						<Input placeholder="Nhập tên sinh viên" onChange={(event) => { onChangeNameST(event) }} />
						<p>Giới Tính</p>
						<Input placeholder="Nhập giới tính sinh viên" onChange={(event) => { onChangeGenderST(event) }} />
						<p>Địa Chỉ</p>
						<Input placeholder="Nhập giới tính sinh viên" onChange={(event) => { onChangeAddressST(event) }} />
					</Modal>
				</Panel>

				<Panel header="Lớp" key="2">
					<button onClick={() => addDataClass()}  >Thêm Lớp</button>
					<Table dataSource={listClass} columns={columnsClass} />
					<Modal title="Thông Báo" visible={isModalVisibleDeleteClass} onOk={() => { handleOkDeleteClass() }} onCancel={handleCancelDeleteClass}>
						<p>Bạn có muốn xóa Lớp không</p>
					</Modal>
					<Modal title="Thay đổi thông tin lớp" visible={isModalVisibleUpdateClass} onOk={() => { handleOkUpdateClass() }} onCancel={handleCancelUpdateClass}>
						<p>Tên Lớp</p>
						<Input placeholder="Nhập tên lớp" onChange={(event) => { onChangeNameClass(event) }} />

					</Modal>
					<Modal title="Thêm Lớp" visible={isModalVisibleAddClass} onOk={() => { handleOkAddClass() }} onCancel={handleCancelAddClass}>
						<p>Mã Lớp</p>
						<Input placeholder="Nhập Mã Lớp" onChange={(event) => { onChangeIdClass(event) }} />
						<p>Tên Lớp</p>
						<Input placeholder="Nhập Tên Lớp" onChange={(event) => { onChangeNameClass(event) }} />

					</Modal>
				</Panel>

				<Panel header="Giáo Viên" key="3">
					<button onClick={() => addDataTeacher()}  >Thêm Giáo Viên</button>
					<Table dataSource={listTeacher} columns={columnsTeacher} />
					<Modal title="Thông Báo" visible={isModalVisibleDeleteTeacher} onOk={() => { handleOkDeleteTeacher() }} onCancel={handleCancelDeleteTeacher}>
						<p>Bạn có muốn xóa giáo viên không</p>
					</Modal>
					<Modal title="Thay đổi thông tin giáo viên" visible={isModalVisibleUpdateTeacher} onOk={() => { handleOkUpdateTeacher() }} onCancel={handleCancelUpdateTeacher}>
						<p>Tên Giáo Viên</p>
						<Input placeholder="Nhập tên giáo viên" onChange={(event) => { onChangeNameTeacher(event) }} />
						<p>Giới Tính</p>
						<Input placeholder="Nhập giới tính giáo viên" onChange={(event) => { onChangeGenderTeacher(event) }} />
						<p>Địa Chỉ</p>
						<Input placeholder="Nhập giới tính giáo viên" onChange={(event) => { onChangeAddressTeacher(event) }} />
					</Modal>
					<Modal title="Thêm sinh viên" visible={isModalVisibleAddTeacher} onOk={() => { handleOkAddTeacher() }} onCancel={handleCancelAddTeacher}>
						<p>Mã Giáo Viên</p>
						<Input placeholder="Nhập Mã giáo viên" onChange={(event) => { onChangeIdTeacher(event) }} />
						<p>Tên Giáo Viên</p>
						<Input placeholder="Nhập tên giáo viên" onChange={(event) => { onChangeNameTeacher(event) }} />
						<p>Giới Tính</p>
						<Input placeholder="Nhập giới tính giáo viên" onChange={(event) => { onChangeGenderTeacher(event) }} />
						<p>Địa Chỉ</p>
						<Input placeholder="Nhập giới tính giáo viên" onChange={(event) => { onChangeAddressTeacher(event) }} />
					</Modal>
				</Panel>
			</Collapse>,
		</div>
	);

}

export default App;
