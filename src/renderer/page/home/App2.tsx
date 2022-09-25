import React, {useEffect, useState} from 'react';
import { useForm }      from  'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  dayjs 			from  'dayjs';
import  isoWeek         from  'dayjs/plugin/isoWeek';
import customParseFormat         from  'dayjs/plugin/customParseFormat';

type Inputs = {
  userid: string,
  password: string,
  rev_date: Date,
  rev_fm_time: string,
  rev_to_time: string,
  rev_course: string,
}

export default function App() {

  	const { register, 
  	    handleSubmit,
  	    getValues,
		setValue,
  	    watch,
		reset,
  	    formState: { isDirty, isSubmitting, errors },
  	    } = useForm<Inputs>(
			{defaultValues:
				{	userid: "Kang soonki",
					password: "",
					rev_date: new Date(),
				}
			}
		);

	const getRevDate = async () => {
		dayjs.extend(isoWeek);	
		dayjs.extend(customParseFormat)
		let cal_date  = dayjs(); 
		let week_no   = 8 - cal_date.isoWeekday();  // 다음주 월요일을 지정
		let cal_rev_date = cal_date.add(week_no, 'day')
		let esdate = dayjs(cal_rev_date, 'YYYY-MM-DD').toDate()
		console.log('esdate ', esdate.getDay())
		setValue('rev_date', esdate)
		return esdate
	}
	
	const [rev_date, setRev_date] = useState();
	const [userid, setuserid] = useState();

	const onSubmit = (data: Object) => {
		console.log(data)
		reset()
		// reset(userid)
		};

	const onError = (error:Object) => {
		console.log(error)
	}


	useEffect(()=> {
		// console.log(getRevDate());
		console.log('랜드링 될때만 실행');
		setRev_date(rev_date)
		let wk_day = dayjs()
		console.log('usereffect......', wk_day.format('YYYY-MM-DD'));
	},[])

	useEffect(()=> {
		console.log('랜드링 될때만 실행')
		console.log("rev_date")
	},[])
	
	useEffect(()=> {
		console.log(getRevDate())
		// console.log('lllllllllllllll', rev_date.format('YYYY-MM-DD'))
		console.log('랜드링 될때마다 실행')
	})
	
	// const newLocal = 'rev_date';
	// useEffect(()=> {
	// 	console.log(getRevDate());
	// 	console.log('userid')
	// 	console.log('업데이트 될때마다 실행')
	// },[newLocal])


	// const fmTime = register('rev_fm_time');
	// const toTime = register('rev_to_time');

	// const fmChange = (fm_time:string) => {
	// 	if (+getValues('rev_to_time') < +fm_time) {
	// 		setValue('rev_to_time', fm_time)
	// 	}
	// 	console.log(fm_time)
	// }
	// const toChange = (to_time:string) => {
	// 	if (+getValues('rev_fm_time') > +to_time) {
	// 		setValue('rev_fm_time', to_time)
	// 	}
	// 	console.log(to_time)
	// }

	// console.log(getRevDate());
	console.log(watch('userid'));

  	return (
  	<div>
  	      	<h1 className='App-header'>Eden Valley Country Club</h1>
  	      	<form 
  	          	className='p-5'
			  	onSubmit={handleSubmit(onSubmit, onError)}
  	        //   onSubmit={handleSubmit(async (data) => {
  	        //       await new Promise((r) => setTimeout(r, 3000));
  	        //       alert(JSON.stringify(data));
  	        //   })}
  	      	>
  	        <div className="form-group col-md-4">
  	            <label className='hints'>Member ID</label>
  	            <input 
  	                className="form-control" 
  	                placeholder="ID를 입력하세요"
  	                {...register('userid', {required: true})}
  	            />
  	            {errors.userid && <span> 회원 ID를 입력해야 합니다.</span>}
  	            {/* <div name="useridhelp">이곳은 정회원 ID를 입력하여야 합니다.</div> */}
  	        </div>
  	        <div className="form-group col-md-4 pt-3">
  	            <label>Password</label>
  	            <input 
  	                type="password" 
  	                className="form-control" 
  	                placeholder="비밀번호를 입력하세요"
  	                {...register('password')}
  	            />
  	        </div>
  	        <div className="form-group col-md-3 pt-3">
  	            <label>예약 일자</label>
  	            <input 
  	              	type="date" 
  	              	className="form-control" 
  	              	{...register("rev_date", {valueAsDate: true})}
  	            />
  	        </div>
  	        <label className='pt-3'>예약 시간</label>
  	        <div className="form-group col-md-3 ">
  	            <div className='row align-items-start ps-2'>
  	            <select 
  	                className="col form-select" 
  	                aria-label='전체' 
					{...register("rev_fm_time")}
					// onChange={(e) => {
					// 	fmTime.onChange(e);
					// 	fmChange(e.target.value);
					// }}
					// onChange={fmChange}

					onChange={e => {
						if (+getValues("rev_to_time") < +e.target.value) {
							setValue('rev_to_time', e.target.value)
					  	}
					}}
  	           	>
  	                <option value="0" >전 체</option>
  	                <option value="5">5시</option>
  	                <option value="6">6시</option>
  	                <option value="7">7시</option>
  	                <option value="8">8시</option>
  	                <option value="9">9시</option>
  	                <option value="10">10시</option>
  	                <option value="11">11시</option>
  	                <option value="12">12시</option>
  	                <option value="13">13시</option>
  	                <option value="14">14시</option>
  	                <option value="15">15시</option>
  	                <option value="16">16시</option>
  	                <option value="17">17시</option>
  	                <option value="18">18시</option>
  	            </select>
  	            <span className='col align-middle'>부터</span>

  	            <select 
  	                className="col form-select" 
  	                aria-label='전체'
  	                {...register('rev_to_time')}
					// onChange={(e) => {
					// 	toTime.onChange(e);
					// 	console.log(typeof e, e)
					// 	toChange(e.target.value);
					// }}
					onChange={e => {
						if (+getValues("rev_fm_time") > +e.target.value) {
							setValue('rev_fm_time', e.target.value)
					  	}
					}}

  	            >   
  	                <option value="0">전 체</option>
  	                <option value="5">5시</option>
  	                <option value="6">6시</option>
  	                <option value="7">7시</option>
  	                <option value="8">8시</option>
  	                <option value="9">9시</option>
  	                <option value="10">10시</option>
  	                <option value="11">11시</option>
  	                <option value="12">12시</option>
  	                <option value="13">13시</option>
  	                <option value="14">14시</option>
  	                <option value="15">15시</option>
  	                <option value="16">16시</option>
  	                <option value="17">17시</option>
  	                <option value="18">18시</option>
  	            </select>
  	            <span className='col'>까지</span>
  	        	</div>
  	    	</div>

  	        <div className="form-group col-md-4 pt-3">
  	            <label>예약 코스</label>
  	            <select 
  	                className="form-select" 
  	                {...register('rev_course')}
  	          	>   
  	                <option value="0">전 체</option>
  	                <option value="1">Eden Course</option>
  	                <option value="2">Valley Course</option>
  	            </select>
  	        </div>

  	        <button 
  	              	type="submit" 
  	              	disabled={isSubmitting}
  	              	className="fixed-bottom btn btn-primary btn-lg mx-auto mb-3"
  	        >
  	              	예 약 하 기
  	        </button>
  	    </form>    
  	</div>
  	);
}

