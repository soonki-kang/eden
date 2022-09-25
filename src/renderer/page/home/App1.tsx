import React, {useState, useRef, useEffect} from 'react';
import { useForm }      from  'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [rev_fm_time, setFmTime] = useState('7');
  const [rev_to_time, setToTime] = useState('7');
  const fm_time = useRef();
  const to_time = useRef();
  const { register, 
          handleSubmit,
          getValues,
          watch,
          formState: { isDirty, isSubmitting, errors },
        } = useForm();

  console.log(watch('userid'));

  useEffect(() => {
    console.log(`fm_time current ${fm_time.current}  to_time current ${to_time.current}`);
    let  fm_time_value = document.getElementById('rev_fm_time');
    let  to_time_value = document.getElementById('rev_to_time');
    console.log(`fm_time :  ${fm_time_value}  to_time ${to_time_value}`)
  }, [])


  const onFmTime = (newFmTime:string) => {
    setFmTime(newFmTime)
    const to_time_index = document.getElementById('rev_to_time')
    console.log(`rev to index ${to_time_index}`)
  }
  const onToTime = (newToTime:string) => {
    setToTime(newToTime)
    const to_time_index = document.getElementById('rev_to_time')
    console.log(`rev to index ${to_time_index}`)
  }

  return (
    <div>
        <h1 className='App-header'>Eden Valley Country Club</h1>
        <form 
            className='p-5'
            onSubmit={handleSubmit(async (data) => {
                await new Promise((r) => setTimeout(r, 3000));
                alert(JSON.stringify(data));
            })}
        >
            <div className="form-group col-md-4">
                <label className='hints'>Member ID</label>
                <input 
                      className="form-control" 
                      id="userid" 
                    //   aria-describedby="useridhelp" 
                      placeholder="ID를 입력하세요"
                      {...register('userid', {required: true})}
                />
                {errors.userid && <span> 회원 ID를 입력해야 합니다.</span>}
                {/* <div id="useridhelp">이곳은 정회원 ID를 입력하여야 합니다.</div> */}
            </div>
            <div className="form-group col-md-4 pt-3">
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="비밀번호를 입력하세요"
                    {...register('password')}
                />
            </div>
            <div className="form-group col-md-3 pt-3">
                <label>예약 일자</label>
                <input 
                    type="date" 
                    className="form-control" 
                    id="rev_date" 
                    {...register('rev_date')}
                />
            </div>
            <label className='pt-3'>예약 시간</label>
            <div className="form-group col-md-3 ">
              <div className='row align-items-start ps-2'>
                <select 

                    className="col form-select" 
                    id="rev_fm_time"  
                    aria-label='전체' 
                    value={rev_fm_time} 
                    {...register('rev_fm_time')}
                    onChange={(event) => onFmTime(event.target.value)} 
                    // ref={fm_time}
                >
                    <option value="0" >전 체</option>
                    <option value="5">5시</option>
                    <option value="6">6시</option>
                    <option value="7">7시</option>
                    <option value="8">8시</option>
                    <option value="9">9시</option>
                    <option value="11">10시</option>
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
                    id="rev_to_time"  
                    aria-label='전체'
                    value={rev_to_time} 
                    {...register('rev_to_time')}
                    onChange={(event) => onToTime(event.target.value)}
                >   
                    <option value="0">전 체</option>
                    <option value="5">5시</option>
                    <option value="6">6시</option>
                    <option value="7">7시</option>
                    <option value="8">8시</option>
                    <option value="9">9시</option>
                    <option value="11">10시</option>
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
                    id="rev_course"
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
                className="fixed-bottom btn btn-primary mb-3"
            >
                예 약 하 기
            </button>
      </form>    
    </div>
  );
}

export default App;
