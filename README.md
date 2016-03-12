# SSE_13081105
##13081105刘宇欣的自我介绍 
* 姓名：刘宇欣 
* 学号：13081105
* 年级：大三
* **Github主页**  [Mypage](https://github.com/SSE-13/SSE_13081105)
* I have trouble in the softwares...

######*代码片段*
<pre><code>#include<ctime>
    #include<iostream>
    using namespace std;
    int main()
    {
 	    int t,i=0,computerNumber;
	    srand( static_cast<int>(time(0))) ; 
	    computerNumber = 1 + rand( ) % 10 ; 
      cout<<"Write down a number between 1 and 10."<<endl;
      while(1)
	    {
		    cin>>t;
		    i++;
		    if(t==computerNumber) {
			    cout<<"It's right."<<endl;
			    cout<<"Time: "<<i<<endl;
		      cout<<"The number:"<<computerNumber<<endl;
          break;
		  }
		  if(t<computerNumber) 
			  cout<<"It's smaller."<<endl;
		  else
		    cout<<"It's bigger."<<endl;
	  }
	  return 0;
  }
</code></pre>

