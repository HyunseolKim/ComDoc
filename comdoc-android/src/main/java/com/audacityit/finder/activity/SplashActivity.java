package com.audacityit.finder.activity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Point;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.LinearInterpolator;
import android.view.animation.TranslateAnimation;
import android.widget.ImageView;
import android.widget.ScrollView;
import android.widget.Toast;

import com.audacityit.finder.R;
import com.audacityit.finder.util.UtilMethods;
import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.AsyncHttpResponseHandler;
import com.loopj.android.http.JsonHttpResponseHandler;
import com.loopj.android.http.RequestParams;

import org.json.JSONException;
import org.json.JSONObject;

import cz.msebera.android.httpclient.Header;

/**
 * @author Audacity IT Solutions Ltd.
 * @mainpage SplashActivity
 * @class SplashActivity
 * @brief Activity for showing the splash screen
 */

public class SplashActivity extends AppCompatActivity {

    private ScrollView promoScrollView;
    private ImageView promoView;
    Animation translateAnimation;
    RequestParams param;

    private AsyncHttpClient mHttpClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        promoScrollView = (ScrollView) findViewById(R.id.promoScrollView);
        promoView = (ImageView) findViewById(R.id.promoImageView);
        Point point = UtilMethods.getWindowSize(this);
        ScrollView.LayoutParams params = new ScrollView.LayoutParams(point.x * 2,
                ScrollView.LayoutParams.MATCH_PARENT);
        promoView.setLayoutParams(params);
        findViewById(R.id.btnSkip).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(SplashActivity.this, LandingActivity.class));
            }
        });

        promoScrollView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                return false;
            }
        });
        translateAnimation = new TranslateAnimation(TranslateAnimation.ABSOLUTE, 0f,
                TranslateAnimation.ABSOLUTE, -point.x, TranslateAnimation.ABSOLUTE, 0f,
                TranslateAnimation.ABSOLUTE, 0f);
        translateAnimation.setDuration(8000);
        translateAnimation.setRepeatCount(Animation.INFINITE);
        translateAnimation.setRepeatMode(Animation.REVERSE);
        translateAnimation.setInterpolator(new LinearInterpolator());
        promoView.startAnimation(translateAnimation);
        promoView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                return true;
            }
        });
        promoScrollView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                return true;
            }
        });

        tokenCheck();




    }

    private void tokenCheck() {
        param = new RequestParams();
        mHttpClient=new AsyncHttpClient();
        Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                final SharedPreferences pref;
                String token = null;
                        if(getSharedPreferences("pref", MODE_PRIVATE)!=null){
                            pref=getSharedPreferences("pref", MODE_PRIVATE);
                            token = pref.getString("token", "NON");          //Get token when it is saved
                            param.put("access_token", token);
                            Toast.makeText(getApplicationContext(), "I have token" ,Toast.LENGTH_SHORT).show();
                            Toast.makeText(getApplicationContext(), token ,Toast.LENGTH_SHORT).show();
                            mHttpClient.post("http://40.74.139.156:1337/post/jwt", param, new AsyncHttpResponseHandler() {

                                @Override
                                public void onSuccess(int statusCode, Header[] headers, byte[] responseBody) {
                                    Toast.makeText(getApplicationContext(), "token save success" ,Toast.LENGTH_SHORT).show();
                                    startActivity(new Intent(SplashActivity.this, HomeActivity.class));
                                    finish();
                                }

                                @Override
                                public void onFailure(int statusCode, Header[] headers, byte[] responseBody, Throwable error) {
                                    Toast.makeText(getApplicationContext(), "token save fail" ,Toast.LENGTH_SHORT).show();
                                    startActivity(new Intent(SplashActivity.this, LandingActivity.class));
                                    finish();
                                }
                            });
                        }
                        else{
                            Toast.makeText(getApplicationContext(), "I have not token.",Toast.LENGTH_SHORT).show();
                            startActivity(new Intent(SplashActivity.this, LandingActivity.class));
                            finish();
                        }
            }


        }, 2000);

    }
    @Override
    protected void onPause() {
        super.onPause();
        finish();
    }
}
