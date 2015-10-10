package com.example.kahye.comdoc.ui;

import android.support.v7.widget.CardView;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.kahye.comdoc.R;
import com.example.kahye.comdoc.model.Example;

import java.util.List;

/**
 * Created by Kahye on 2015. 10. 7..
 */
//public class RVAdapter extends RecyclerView.Adapter<RVAdapter.PersonViewHolder>{
//
//    @Override
//    public PersonViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
////        View v = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.item, viewGroup, false);
////        PersonViewHolder pvh = new PersonViewHolder(v);
//        return pvh;
//    }
//
//    @Override
//    public void onBindViewHolder(PersonViewHolder holder, int position) {
//
//    }
//
//    @Override
//    public int getItemCount() {
//        return examples.size();
//    }
//
//    public static class PersonViewHolder extends RecyclerView.ViewHolder {
//        CardView cv;
//        TextView personName;
//        TextView personAge;
//        ImageView personPhoto;
//
//        PersonViewHolder(View itemView) {
//            super(itemView);
//            cv = (CardView)itemView.findViewById(R.id.cv);
//            personName = (TextView)itemView.findViewById(R.id.person_name);
//            personAge = (TextView)itemView.findViewById(R.id.person_age);
//            personPhoto = (ImageView)itemView.findViewById(R.id.person_photo);
//        }
//    }
//    List<Example> examples;
//
//    RVAdapter(List<Example> examples){
//        this.examples = examples;
//    }
//
//}